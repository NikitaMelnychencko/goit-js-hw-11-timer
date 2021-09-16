
class CountdownTimer{
  constructor({ selector,classUpdateValue, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this._refs = this._getRefs(selector,classUpdateValue);
    this.onTick = onTick;

    this.start();
  }
  _getRefs(root,classBlok) {
    const refs = {
      controls: document.querySelectorAll(`${root} .${classBlok}`)
    };
    return refs;
  }
  start() {
    const startTime = new Date(this.targetDate)
    const currentTime = Date.now();
    let deltaTime = currentTime - startTime;
    setInterval(() => {
      deltaTime = deltaTime - 1000;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      const arr=[days,hours,mins,secs]
      

      this.onTick(arr,this._refs.controls);
    }
    ,1000)
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  classUpdateValue: 'value',
  targetDate: new Date('Jul 17, 2019'),
  onTick: updateClockFace,
});

function getTimeComponents(time) {
  /*
  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
  */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  /*
  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
  * остатка % и делим его на количество миллисекунд в одном часе
  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
  */
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  /*
  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
  */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  /*
  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
  * миллисекунд в одной секунде (1000)
  */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return {days,hours,mins,secs}
}
function pad(value) {
  return String(value).padStart(2, '0');
}
function updateClockFace(arr,bloks) {
  bloks.forEach((elem,index) => {
    elem.textContent = arr[index];
  });
}
