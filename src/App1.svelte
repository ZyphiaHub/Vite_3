<script>

import { onMount } from 'svelte';
  let selectedGame = 'Star Trek'; // Kezdőérték

  // Az egyes kockadobásokhoz külön-külön állapotok
  let dicePool1 = { diceCount: 2, sides: 20, results: [], messages: [], mode: 'TN', targetNumber: 12 };
  let dicePool2 = { diceCount: 2, sides: 20, results: [], messages: [], mode: 'TN', targetNumber: 12 };
  let dicePool3 = { diceCount: 2, sides: 20, results: [], messages: [], mode: 'TN', targetNumber: 12 };

  const availableSides = [4, 6, 8, 10, 12, 20, 100]

  function setSides(dicePool, side) {
    dicePool.sides = side;
    dicePool.selectedSide = side;
  }

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
    }
  }

  // A játék stílusa szerinti stílus beállítások
  const gameStyles = {
    'Star Trek': {
      sides: 20,
      mode: 'TN',

      backgroundColor: '#190033',
      textColor: '#cc99cc',
      buttonColor: '#97567b',
      font: 'Arial, sans-serif'
    },
    'Mage the Awakening': {
      sides: 10,
      mode: 'fixed',

      backgroundColor: '#1a1a1a',
      textColor: '#ffffcc',
      buttonColor: '#cd6363',
      font: '"Georgia", serif'
    }
  };

  // A kiválasztott játék stílusának alkalmazása
  let currentStyle = gameStyles[selectedGame];
  
  // Amikor a játék módosul
  function handleGameChange(event) {
    selectedGame = event.target.value;
    currentStyle = gameStyles[selectedGame];

    const {sides, mode} = gameStyles[selectedGame]
    dicePool1.sides = sides;
    dicePool1.mode = mode;
    dicePool2.sides = sides;
    dicePool2.mode = mode;
    dicePool3.sides = sides;
    dicePool3.mode = mode;
  }

  // Általános kockadobó függvény
function rollDice(dicePool) {
  dicePool.results = Array.from(
    { length: dicePool.diceCount },
    () => Math.floor(Math.random() * dicePool.sides) + 1
  );
  dicePool.results.sort((a, b) => a - b);
  dicePool.messages = dicePool.results.map(result =>
    getMessageForRoll(result, dicePool.sides, dicePool.mode, dicePool.targetNumber)
  );
}
  // A kockadobásokat végző függvények
  function rollDice1() {
    dicePool1.results = Array.from({ length: dicePool1.diceCount }, () => Math.floor(Math.random() * dicePool1.sides) + 1);
    dicePool1.results.sort((a, b) => a - b);
    dicePool1.messages = dicePool1.results.map(result => getMessageForRoll(result, dicePool1.sides, dicePool1.mode, dicePool1.targetNumber));
  }

  function rollDice2() {
    dicePool2.results = Array.from({ length: dicePool2.diceCount }, () => Math.floor(Math.random() * dicePool2.sides) + 1);
    dicePool2.results.sort((a, b) => a - b);
    dicePool2.messages = dicePool2.results.map(result => getMessageForRoll(result, dicePool2.sides, dicePool2.mode, dicePool2.targetNumber));
  }

  function rollDice3() {
    dicePool3.results = Array.from({ length: dicePool3.diceCount }, () => Math.floor(Math.random() * dicePool3.sides) + 1);
    dicePool3.results.sort((a, b) => a - b);
    dicePool3.messages = dicePool3.results.map(result => getMessageForRoll(result, dicePool3.sides, dicePool3.mode, dicePool3.targetNumber));
  }
</script>




<main style="background-color: {currentStyle.backgroundColor}; color: {currentStyle.textColor}; font-family: {currentStyle.font}; padding: 1rem;">
  <label>
    Válassz játékot:
    <select on:change={handleGameChange}>
      <option value="Star Trek">Star Trek</option>
      <option value="Mage the Awakening">Mage the Awakening</option>
    </select>
  </label>


  <h1>Dice Roller</h1>
  

  <div style="display: flex; justify-content: space-around;">
    <!-- Kocka készlet 1 -->
    <div class="dice-container">
      <h2>Kocka készlet 1</h2>
      <label>
        Dobás:
        <input type="number" bind:value={dicePool1.diceCount} min="1" style="width: 25px;" /> d {dicePool1.sides}
      </label>
      
    
      <label>
        Válassz másik kockát:
        <select bind:value={dicePool1.sides}>
          <!-- Csak az engedélyezett oldal számokat tartalmazza -->
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="100">100</option>
        </select>
      </label>


      <label>
        Értékelési mód:
        <select bind:value={dicePool1.mode}>
          <option value="percentage">Százalékos</option>
          <option value="fixed">Fix</option>
          <option value="TN">TN</option>
        </select>
      </label>
      
      <!-- TN érték megadása, ha a mód 'TN' -->
      {#if dicePool1.mode === 'TN'}
      <label>
        Célszám:
        <input type="number" bind:value={dicePool1.targetNumber} min="2" style="width: 20px;"/>
      </label>
      {/if}

      <button style="background-color: {currentStyle.buttonColor};" on:click={rollDice1}>Dobj!</button>
      
      <div class="results">
        {#if dicePool1.results.length > 0}
          <h3>Eredmények:</h3>
          <ul>
            {#each dicePool1.results as result, idx}
              <li>Kocka {idx + 1}: {result} - {dicePool1.messages[idx]}</li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>

    <!-- Kocka készlet 2 -->
    <div class="dice-container">
      <h2>Kocka készlet 2</h2>
      <label>
        Dobás:
        <input type="number" bind:value={dicePool2.diceCount} min="1"  style="width: 25px;"/> d {dicePool2.sides}
      </label>

      <label>
    Válassz másik kockát:
    <select bind:value={dicePool2.sides}>
      <!-- Csak az engedélyezett oldal számokat tartalmazza -->
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="8">8</option>
      <option value="12">12</option>
      <option value="20">20</option>
      <option value="100">100</option>
    </select>
  </label>

      <label>
        Értékelési mód:
        <select bind:value={dicePool2.mode}>
          <option value="percentage">Százalékos</option>
          <option value="fixed">Fix</option>
          <option value="TN">TN</option>
        </select>
      </label>

      <!-- TN érték megadása, ha a mód 'TN' -->
      {#if dicePool2.mode === 'TN'}
      <label>
        Célszám:
        <input type="number" bind:value={dicePool2.targetNumber} min="2" style="width: 20px;"/>
      </label>
      {/if}
      
      <button style="background-color: {currentStyle.buttonColor};" on:click={rollDice2}>Dobj!</button>
      
      <div class="results">
        {#if dicePool2.results.length > 0}
          <h3>Eredmények:</h3>
          <ul>
            {#each dicePool2.results as result, idx}
              <li>Kocka {idx + 1}: {result} - {dicePool2.messages[idx]}</li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>

    <!-- Kocka készlet 3 -->
     <!-- Dice Roller 3 csak "Mage the Awakening" esetén -->
    {#if selectedGame === 'Mage the Awakening'}
    <div class="dice-container">
      <h2>Kocka készlet 3</h2>
      <label>
        Dobás:
        <input type="number" bind:value={dicePool3.diceCount} min="1"  style="width: 25px;"/> d {dicePool3.sides}
      </label>

      <label>
    Válassz másik kockát:
    <select bind:value={dicePool3.sides}>
      <!-- Csak az engedélyezett oldal számokat tartalmazza -->
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="8">8</option>
      <option value="12">12</option>
      <option value="20">20</option>
      <option value="100">100</option>
    </select>
  </label>

      <label>
        Értékelési mód:
        <select bind:value={dicePool3.mode}>
          <option value="percentage">Százalékos</option>
          <option value="fixed">Fix</option>
          <option value="TN">TN</option>
        </select>
      </label>

      

      <button style="background-color: {currentStyle.buttonColor};" on:click={rollDice3}>Dobj!</button>
      
      <div class="results">
        {#if dicePool3.results.length > 0}
          <h3>Eredmények:</h3>
          <ul>
            {#each dicePool3.results as result, idx}
              <li>Kocka {idx + 1}: {result} - {dicePool3.messages[idx]}</li>
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
