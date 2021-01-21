class CountdownTimer  {
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;


        this.refs = {
            days: this.selector.querySelector('[data-value="days"]'),
            hours: this.selector.querySelector('[data-value="hours"]'),
            mins: this.selector.querySelector('[data-value="mins"]'),
            secs: this.selector.querySelector('[data-value="secs"]'),
 
        };


        
        this.updateTime()
    }
    updateTime() {
        this.interval = setInterval(() => {
        this.carrentDate = Date.now();
        this.timeBetween = this.carrentDate -this.targetDate;
 
        this.days = Math.floor(this.timeBetween / (1000 * 60 * 60 * 24));
        console.log("days",this.days);

        this.hours = Math.floor((this.timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        console.log("hours",this.hours);

        this.mins = Math.floor((this.timeBetween % (1000 * 60 * 60)) / (1000 * 60));
        console.log("mins",this.mins);

        this.secs = Math.floor((this.timeBetween % (1000 * 60)) / 1000);
        console.log("secs", this.secs);

        this.refs.hours.textContent = this.hours
        this.refs.mins.textContent = this.mins
        this.refs.secs.textContent = this.secs
        this.refs.days.textContent = this.days
   
            
         }, 1000);
  
    }
}




new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});