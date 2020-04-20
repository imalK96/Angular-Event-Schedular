import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'event-scheduler';
  updateItemIndex: 0;
  event: any = {
    title: '',
    date: null,
    startTime: '',
  };

  events = [
    {
      title: 'Event 1',
      date: new Date('02-02-2020').toLocaleDateString(),
      time: '00:40',
    },
    {
      title: 'Event 2',
      date: new Date('03-03-2020').toLocaleDateString(),
      time: '12:02',
    },
  ];
  //Add
  addEvent() {
    this.events.push(this.event);
    alert(`Event ${this.event.title} added on ${this.event.date}`);
    this.clearEvent();
  }
  //Delete event
  deleteEvent(eventIndex) {
    alert(`${this.events[eventIndex].title} deleted!`);
    this.events.splice(eventIndex, 1);
  }
  //Set text
  setEventTextToForm(eventIndex) {
    this.event.title = this.events[eventIndex].title;
    this.event.date = this.events[eventIndex].date;
    this.event.time = this.events[eventIndex].time;
    this.updateItemIndex = eventIndex;
  }

  //Handle Update
  updateEvent() {
    let { title, date, time } = this.events[this.updateItemIndex];
    let oldEvent = this.events[this.updateItemIndex];
    let newEvent = {
      title: this.event.title,
      date: this.event.date,
      time: this.event.time,
    };
    this.events[this.updateItemIndex] = newEvent;
  }

  //Clear
  clearEvent() {
    this.event = {
      title: '',
      date: null,
      startTime: '',
    };
  }
}
