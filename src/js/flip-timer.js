class CountdownTimer {
  constructor({ selector, classUpdateValue, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this._refs = this._getRefs(selector, classUpdateValue);

    this.start();
  }
  _getRefs(root, classBlok) {
    const refs = {
      controls: document.querySelectorAll(`${root} .${classBlok}`),
    };
    return refs;
  }
  start() {
    const startTime = new Date(this.targetDate);
    const currentTime = Date.now();
    let deltaTime = currentTime - startTime;
    let init = 1;
    setInterval(() => {
      deltaTime = deltaTime - 1000;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
      const arr = [days, hours, mins, secs];

      this.updateClockFace(arr, this._refs.controls, init);
      init = 2;
    }, 1000);
  }

  getTimeComponents(time) {
    /*
     * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
     * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
     */
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateClockFace(arr, bloks, init) {
    bloks.forEach((elem, index) => {
      if (elem.dataset.digitAfter !== arr[index]) {
        elem.children[0].classList.add('flipped');
        this.flippedCard(elem,arr[index]) 
      }

      elem.children[0].addEventListener('transitionend', e => {
        const cardClone = e.currentTarget;
        elem.replaceChild(cardClone, e.currentTarget);
        cardClone.classList.remove('flipped');
      });

      if (init === 1) {
        this.flippedCard(elem,arr[index])
      }
    });
  }
  flippedCard(elem,value) {
    elem.dataset.digitBefore = value; 
    elem.children[0].children[1].textContent = value;
    elem.dataset.digitAfter = value ; 
    elem.children[0].children[0].textContent = value; 
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  classUpdateValue: 'value',
  targetDate: new Date('Jul 17, 2019'),
});
