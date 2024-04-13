
//FOR COUNTING ANIMATION [ACHIEVEMENTS]
document.addEventListener('DOMContentLoaded', function () {
    const graduatesCount = document.getElementById('graduates');
    const campusCount = document.getElementById('campus');
    const programsCount = document.getElementById('programs');
    const staffsCount = document.getElementById('staffs');

    let countingDone = false;

    window.addEventListener('scroll', function () {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercentage >= 70 && !countingDone) {
            countingDone = true;
            countGraduates();
            countCampus();
            countPrograms();
            countStaffs();
        }
    });

    function countGraduates() {
        let count = 5900;
        const interval = setInterval(function () {
            if (count <= 6000) {
                graduatesCount.innerText = count;
                count++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    }

    function countCampus() {
        let count = 0;
        const interval = setInterval(function () {
            if (count <= 5) {
                campusCount.innerText = count;
                count++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }

    function countPrograms() {
        let count = 0;
        const interval = setInterval(function () {
            if (count <= 6) {
                programsCount.innerText = count;
                count++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }

    function countStaffs() {
        let count = 170;
        const interval = setInterval(function () {
            if (count <= 234) {
                staffsCount.innerText = count;
                count++;
            } else {
                clearInterval(interval);
            }
        }, 35);
    }



    
});