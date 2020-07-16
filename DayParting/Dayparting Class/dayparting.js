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
    this.handler();
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

    const dayTitle = document.createElement('div');
    dayTitle.classList.add('day-title');
    dayTitle.textContent = day[dayNumber] || 'day does not exist';

    return dayTitle;
  }

  handler() {
    let isMouseDown = false;
    document.querySelectorAll('.hour-block').forEach((node) => {
      node.addEventListener('mousedown', (e) => {
        isMouseDown = true;

        const hourOfSingleDay = e.target.getAttribute('data-hour');
        console.log(hourOfSingleDay);
        e.target.classList.toggle('enabled');

        const arrayLocationOfHour = hourOfSingleDay.split('-').map(Number);
        console.log(arrayLocationOfHour);

        const day = arrayLocationOfHour[0];
        const hour = arrayLocationOfHour[1];

        this.dayPartingState.payload.schedule[day][hour] = !this.dayPartingState
          .payload.schedule[day][hour];
      });

      node.addEventListener('mouseover', (e) => {
        if (isMouseDown) {
          console.log(e.target.getAttribute('data-hour'));
          const hourOfSingleDay = e.target.getAttribute('data-hour');
          console.log(hourOfSingleDay);
          e.target.classList.toggle('enabled');

          const arrayLocationOfHour = hourOfSingleDay.split('-').map(Number);
          console.log(arrayLocationOfHour);

          const day = arrayLocationOfHour[0];
          const hour = arrayLocationOfHour[1];

          this.dayPartingState.payload.schedule[day][hour] = !this
            .dayPartingState.payload.schedule[day][hour];
        }
      });
    });
    document.addEventListener('mouseup', (e) => {
      // console.log('MouseUp');
      isMouseDown = false;
    });
  }

  update() {
    document.getElementById('dayParting').innerHTML = `<div>Now</div>`;
  }

  render() {
    const el = document.getElementById('dayParting');
    const schedules = this.dayPartingState.payload.schedule;

    // Add column headers
    el.appendChild(this.addDay('blank'));
    for (let i = 0; i < schedules[0].length; i++) {
      el.appendChild(this.columnHeader(i));
    }
    el.appendChild(document.createElement('br'));

    // Add row title and hour blocks
    for (let i = 0; i < schedules.length; i++) {
      el.appendChild(this.addDay(i));
      for (let j = 0; j < schedules[i].length; j++) {
        el.appendChild(this.createHourBlock(schedules[i][j], `${i}-${j}`));
      }
      el.appendChild(document.createElement('br'));
    }
  }

  // HELPERS
  showObject() {
    console.log(this.dayPartingState.payload);
  }

  changeFirstElement() {
    this.dayPartingState.payload.schedule[0][0] = false;
  }
}
