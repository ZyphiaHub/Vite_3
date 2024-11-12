<script>

import { onMount } from 'svelte';
  let selectedGame = 'Star Trek'; // Kezdőérték

  // Az egyes kockadobásokhoz külön-külön állapotok
  let dicePool6 = { diceCount: 4, sides: 6, results: [], messages: [], mode: 'dmg6', targetNumber: 0 };
  let dicePool6m = { diceCount: 3, sides: 6, results: [], messages: [], mode: 'percentage', targetNumber: 0 };
  let dicePool10 = { diceCount: 5, sides: 10, results: [], messages: [], mode: 'fixed', targetNumber: 0 };
  let dicePool20 = { diceCount: 2, sides: 20, results: [], messages: [], mode: 'TN', targetNumber: 12 };


  // Üzenetek hozzárendelése az eredményekhez
  function getMessageForRoll(roll, sides, mode, targetNumber) {
    if (mode === 'percentage') {
      // Százalékos alapú értékelés
      if (roll <= sides * 0.3) {
        return "Gyenge";
      } else if (roll <= sides * 0.7) {
        return "Közepes";
      } else {
        return "Nagyszerű";
      }
    } else if (mode === 'fixed') {
      // Fix határértékek alapján: pl. sides=10 esetén minden 8 vagy nagyobb érték "Siker"
      if (sides === 10 && roll >= 8) {
        return "Siker";
      } else if (roll < 8 && roll > 1) {
        return "Nem számít";
      } else if (roll === 1) {
        return "Uff";
      } else {
        return "Nagyszerű";
      }
     } else if (mode === 'TN') {
      // Célszámhoz hasonlítjuk 
      if ( roll === 1) {
        return "Balsiker";
      } else if (roll > targetNumber) {
        return "Nem sikerült";
      } else if (roll <= targetNumber) {
        return "Siker";
      } 
    } else if (mode === 'dmg6') {
      // Célszámhoz hasonlítjuk 
      if ( roll === 1) {
        return "1 seb";
      } else if (roll === 2) {
        return "2 seb";
      } else if (roll === 3 || roll === 4) {
        return "Nem számít";
      } else if (roll === 5 || roll === 6) {
        return "1 sebzés plus effect";
      }
    } 
  }

  // A játék stílusa szerinti stílus beállítások
  const gameStyles = {
    'Star Trek': {
      
      backgroundColor: '#190033',
      textColor: '#cc99cc',
      buttonColor: '#97567b',
      font: 'Arial, sans-serif'
    },
    'Mage the Awakening': {

      backgroundColor: '#1a1a1a',
      textColor: '#ffffcc',
      buttonColor: '#cd6363',
      font: '"Georgia", serif'
    }
  };

  // A kiválasztott játék stílusának alkalmazása
  let currentStyle = gameStyles[selectedGame];
  
  // Amikor a játék módosul
  function setGame(game) {
    selectedGame = game;
    currentStyle = gameStyles[selectedGame];
    document.body.style.backgroundColor = currentStyle.backgroundColor;
  }

  onMount(() => {
    document.body.style.backgroundColor = currentStyle.backgroundColor;
  });


  function rollDice(dicePool) {
  dicePool.results = [];

  // Kockadobások a kocka szám alapján
  for (let i = 0; i < dicePool.diceCount; i++) {
    let roll = Math.floor(Math.random() * dicePool.sides) + 1;
    dicePool.results.push(roll);

    // Ha a játék Mage the Awakening, alkalmazzuk az "exploding dice" mechanizmust a 10-es kockákra
    if (selectedGame === 'Mage the Awakening' && dicePool.sides === 10) {
      while (roll === 10) {
        roll = Math.floor(Math.random() * dicePool.sides) + 1;
        dicePool.results.push(roll);
      }
    }
  }

  dicePool.results.sort((a, b) => a - b);

  // Eredményekhez tartozó üzenetek hozzárendelése
  dicePool.messages = dicePool.results.map(result =>
    getMessageForRoll(result, dicePool.sides, dicePool.mode, dicePool.targetNumber)
  );
}
  
function rollForPool6() {
    rollDice(dicePool6);
    dicePool6 = { ...dicePool6 }; 
    
  }
  function rollForPool6m() {
    rollDice(dicePool6m);
    dicePool6m = { ...dicePool6m }; 
    
  }

  function rollForPool10() {
    rollDice(dicePool10);

    // Számoljuk meg, hány siker értékelés volt
  dicePool10.successCount = dicePool10.messages.reduce((count, message) => {
    return message === "Siker" ? count + 1 : count;
  }, 0);

    dicePool10 = { ...dicePool10 };
    
  }

  function rollForPool20() {
    rollDice(dicePool20);
    dicePool20 = { ...dicePool20 };
    
  }
</script>


<main style="background-color: {currentStyle.backgroundColor}; 
  color: {currentStyle.textColor}; font-family: {currentStyle.font}; padding: 1rem;">

  <div style="display: flex; justify-content: center; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
    <button
      on:click={() => setGame('Star Trek')}
      style="background-color: {selectedGame === 'Star Trek' ? currentStyle.buttonColor : '#666666'}; 
             color: {currentStyle.textColor}; 
             padding: 0.5rem 1rem; 
             border: none; 
             border-radius: 4px; 
             margin-right: 0.5rem; 
             cursor: pointer;"
    >
      Star Trek
    </button>
    <button
      on:click={() => setGame('Mage the Awakening')}
      style="background-color: {selectedGame === 'Mage the Awakening' ? currentStyle.buttonColor : '#666666'}; 
             color: {currentStyle.textColor}; 
             padding: 0.5rem 1rem; 
             border: none; 
             border-radius: 4px; 
             cursor: pointer;"
    >
      Mage the Awakening
    </button>
  </div>


  <h1>Dice Roller</h1>
  

  <div style="display: flex; justify-content: space-around;">

<!-- Kocka készlet d20 -->

 {#if selectedGame === 'Star Trek'}
  <div class="dice-container" style="background-color: #202020; color: {currentStyle.textColor};">
    <h2>Task / Attack pool</h2>
    <label>
      Dobás:
      <input type="number" bind:value={dicePool20.diceCount} min="1"  style="width: 25px;"/> d {dicePool20.sides}
    </label>

    <label>
      Célszám:
      <input type="number" bind:value={dicePool20.targetNumber}   style="width: 40px;"/> 
    </label>
 
    <button style="background-color: {currentStyle.buttonColor};" on:click={rollForPool20}>Dobj!</button>
       
    <div class="results">
      {#if dicePool20.results.length > 0}
      <h3>Eredmények:</h3>
         <ul>
         {#each dicePool20.results as result, idx}
            <li>D{idx + 1} =  {result} -> {dicePool20.messages[idx]}</li>
            {/each}
          </ul>
      {/if}
    </div>
     
  </div>
{/if}

{#if selectedGame === 'Star Trek'}
<div class="dice-container" style="background-color: #202020; color: {currentStyle.textColor};">
  <h2>Sebzés kockák</h2>
  <label>
    Dobás:
    <input type="number" bind:value={dicePool6.diceCount} min="1"  style="width: 25px;"/> d {dicePool6.sides}
  </label>

  <button style="background-color: {currentStyle.buttonColor};" on:click={rollForPool6}>Dobj!</button>
     
  <div class="results">
    {#if dicePool6.results.length > 0}
    <h3>Eredmények:</h3>
       <ul>
       {#each dicePool6.results as result, idx}
          <li>D{idx + 1} = {result} -> {dicePool6.messages[idx]}</li>
          {/each}
        </ul>
    {/if}
  </div>
   
</div>
{/if}

<!-- Kocka készlet Mage -->

{#if selectedGame === 'Mage the Awakening'}
  

  <div class="dice-container" style="background-color: #332020; color: {currentStyle.textColor};">
    <h2>Action / Spell</h2>
      <label>
        Dobás:
        <input type="number" bind:value={dicePool10.diceCount} min="1"  style="width: 25px;"/> d {dicePool10.sides}
    </label>
  
    <button style="background-color: {currentStyle.buttonColor};" on:click={rollForPool10}>Dobj!</button>
        
    <div class="results">
      {#if dicePool10.results.length > 0}
        <h3>Eredmények:</h3>
            <ul>
              {#each dicePool10.results as result, idx}
                <li>D{idx + 1} = {result} -> {dicePool10.messages[idx]}</li>
              {/each}
            </ul>
            <p>A 10-es kockákat automatikusan újra dobom.</p>
            <p>Összes siker: {dicePool10.successCount}</p>
      {/if}
    </div>
      
    </div>

    <div class="dice-container" style="background-color: #332020; color: {currentStyle.textColor};">
      <h2>Sebzés</h2>
        <label>
          Dobás:
          <input type="number" bind:value={dicePool6m.diceCount} min="1"  style="width: 25px;"/> d {dicePool6m.sides}
      </label>
    
      <button style="background-color: {currentStyle.buttonColor};" on:click={rollForPool6m}>Dobj!</button>
          
      <div class="results">
        {#if dicePool6m.results.length > 0}
          <h3>Eredmények:</h3>
              <ul>
                {#each dicePool6m.results as result, idx}
                  <li>D{idx + 1} = {result} -> {dicePool6m.messages[idx]}</li>
                {/each}
              </ul>
              
        {/if}
      </div>
        
      </div>
{/if}
</div>

  <style>

    main {
      max-width: 800px;
      margin: auto;
      padding: 2rem;
      text-align: center;
    }
    label, button {
    display: block;
    margin: 1rem 0;
  }
  ul {
    text-align: left;
  }
  div {
    margin-bottom: 2rem;
  }
    .dice-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 500px;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #404040;
      width: 300px;
    }
    .sides-buttons button {
      margin: 0.2rem;
      padding: 0.5rem;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .sides-buttons button[selected] {
      background-color: darkblue;
    }
    .sides-buttons button:hover {
      background-color: lightblue;
    }
  </style>
</main>
