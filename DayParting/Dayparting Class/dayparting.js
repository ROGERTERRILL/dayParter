class dayParting {
  constructor(params) {
    const defaultState = {
      payload: {
        campaign_ids: [1234],
        // 2D array for each day
        schedule: [
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ], // Sunday
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ], // Monday
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ], // Tuesday
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ], // Wednesday
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ], // Thursday
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ], // Friday
          [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ], // Saturday
        ],
      },
    };

    this.dayPartingState = { ...defaultState, ...params };
    this.render();
    // this.handler();
  }

  createHourBlock(status, hour) {
    const div = document.createElement('div');
    div.setAttribute('data-hour', hour);
    div.classList.add('hour-block');
    status ? div.classList.add('enabled') : '';
    return div;
  }

  columnHeader(hour) {
    const div = document.createElement('div');
    div.classList.add('hour-title');
    div.textContent = hour;
    return div;
  }

  generateTableHead(table, hourTitle) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    row.appendChild(document.createElement('th'));
    for (let hour of hourTitle) {
      let th = document.createElement('th');
      let title = document.createTextNode(hour);
      th.appendChild(title); // Creates the th
      row.appendChild(th); // Adds th to the row
    }
  }

  generateTable(table, days, hours) {
    console.log(hours, days);
    for (let day of days) {
      let row = table.insertRow();
      let cell = row.insertCell();
      let text = document.createTextNode(this.addDay(day));
      cell.appendChild(text);
      for (let hour of hours) {
        let cell = row.insertCell();
        cell.classList.add('hour-block');
      }
    }
  }

  getCellIndex(rowsArray) {
    const rowIndex = rowsArray.findIndex((row) =>
          row.contains(event.target)
        );
        const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td.hour-block'));
        const columnIndex = columns.findIndex(
          (column) => column == event.target
        );
        return [rowIndex - 1, columnIndex];
  }

  // addDay(dayNumber) {
  //   const day = {
  //     0: 'sunday',
  //     1: 'monday',
  //     2: 'tuesday',
  //     3: 'wendesday',
  //     4: 'thursday',
  //     5: 'friday',
  //     6: 'saturday',
  //     blank: ' ',
  //   };

  //   const dayTitle = document.createElement('div');
  //   dayTitle.classList.add('day-title');
  //   dayTitle.textContent = day[dayNumber] || 'day does not exist';

  //   return dayTitle;
  // }

  addDay(dayNumber) {
    const day = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wendesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday',
      blank: ' ',
    };

    return day[dayNumber] || 'day does not exist';
  }

  // handler() {
  //   let isMouseDown = false;
  //   document.querySelectorAll('.hour-block').forEach((node) => {
  //     node.addEventListener('mousedown', (e) => {
  //       isMouseDown = true;

  //       const hourOfSingleDay = e.target.getAttribute('data-hour');
  //       console.log(hourOfSingleDay);
  //       e.target.classList.toggle('enabled');

  //       const arrayLocationOfHour = hourOfSingleDay.split('-').map(Number);
  //       console.log(arrayLocationOfHour);

  //       const day = arrayLocationOfHour[0];
  //       const hour = arrayLocationOfHour[1];

  //       this.dayPartingState.payload.schedule[day][hour] = !this.dayPartingState
  //         .payload.schedule[day][hour];
  //     });

  //     node.addEventListener('mouseover', (e) => {
  //       if (isMouseDown) {
  //         console.log(e.target.getAttribute('data-hour'));
  //         const hourOfSingleDay = e.target.getAttribute('data-hour');
  //         console.log(hourOfSingleDay);
  //         e.target.classList.toggle('enabled');

  //         const arrayLocationOfHour = hourOfSingleDay.split('-').map(Number);
  //         console.log(arrayLocationOfHour);

  //         const day = arrayLocationOfHour[0];
  //         const hour = arrayLocationOfHour[1];

  //         this.dayPartingState.payload.schedule[day][hour] = !this
  //           .dayPartingState.payload.schedule[day][hour];
  //       }
  //     });
  //   });
  //   document.addEventListener('mouseup', (e) => {
  //     // console.log('MouseUp');
  //     isMouseDown = false;
  //   });
  // }

  addHandlers() {
    let isMouseDown = false;

    // Get each row
    const rows = document.querySelectorAll('#dayParting tr');

    // Create an array of each row instance
    const rowsArray = Array.from(rows);

    // Get each hour block and for each hour, add click event listener
    document.querySelectorAll('td.hour-block').forEach((hour) =>{
      hour.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        event.target.classList.toggle('enabled');
        let cellIndex  = this.getCellIndex(rowsArray);
        let [day, hour] = cellIndex;
        this.dayPartingState.payload.schedule[day][hour] = !this.dayPartingState
          .payload.schedule[day][hour];
      })
      hour.addEventListener('mouseover', (event) => {
        if(isMouseDown){
          event.target.classList.toggle('enabled');
          let cellIndex  = this.getCellIndex(rowsArray);
          let [day, hour] = cellIndex;
          this.dayPartingState.payload.schedule[day][hour] = !this.dayPartingState
            .payload.schedule[day][hour];
        }
      })
    });
    document.addEventListener('mouseup', e => {
      isMouseDown = false;
    })
  }

  update() {
    document.getElementById('dayParting').innerHTML = `<div>Now</div>`;
  }

  // render() {
  //   const el = document.getElementById('dayParting');
  //   const schedules = this.dayPartingState.payload.schedule;

  //   // Add column headers
  //   el.appendChild(this.addDay('blank'));
  //   for (let i = 0; i < schedules[0].length; i++) {
  //     el.appendChild(this.columnHeader(i));
  //   }
  //   el.appendChild(document.createElement('br'));

  //   // Add row title and hour blocks
  //   for (let i = 0; i < schedules.length; i++) {
  //     el.appendChild(this.addDay(i));
  //     for (let j = 0; j < schedules[i].length; j++) {
  //       el.appendChild(this.createHourBlock(schedules[i][j], `${i}-${j}`));
  //     }
  //     el.appendChild(document.createElement('br'));
  //   }
  // }

  render() {
    const table = document.getElementById('dayParting');

    const hourTitle = Object.keys(this.dayPartingState.payload.schedule[0]);
    const dayTitle = Object.keys(this.dayPartingState.payload.schedule);
    this.generateTable(table, dayTitle, hourTitle);
    this.generateTableHead(table, hourTitle);
    this.addHandlers();
  }

  // HELPERS
  showObject() {
    console.log(this.dayPartingState.payload);
  }

  changeFirstElement() {
    this.dayPartingState.payload.schedule[0][0] = false;
  }
}
