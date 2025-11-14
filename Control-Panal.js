AFRAME.registerComponent('speed+', {
    init: function () {
        console.log('Speed + component initialized');
        this.el.addEventListener('click', function () {
            const planets = document.querySelectorAll('.planets');
            console.log('Speed + box clicked');
            planets.forEach(planet => {
                var animation = planet.getAttribute('animation');
                var newspeed = parseInt(animation.dur) * 0.9;
                var rot = planet.getAttribute('rotation');
                if (newspeed < 2000){
                    newspeed = 2000;
                }
                animation.dur = newspeed;
                animation.to = rot.x + ' ' + (rot.y + 360).toFixed(0) +' ' + rot.z;
                

                planet.setAttribute('animation', animation);
                
                console.log('New speed duration:', newspeed.toString());
                console.log(planet, animation);
                console.log('Speed + ' + animation.dur.toFixed(0));
            });
            


        });
    
    },


});

AFRAME.registerComponent('speed-', {
    init: function () {
        console.log('Speed + component initialized');
        this.el.addEventListener('click', function () {
            const planets = document.querySelectorAll('.planets');
            console.log('Speed + box clicked');
            planets.forEach(planet => {
                var animation = planet.getAttribute('animation');
                var newspeed = parseInt(animation.dur) / 0.9;
                var rot = planet.getAttribute('rotation');
                if (newspeed < 2000){
                    newspeed = 2000;
                }
                animation.dur = newspeed;
                animation.to = rot.x + ' ' + (rot.y + 360).toFixed(0) +' ' + rot.z;
                

                planet.setAttribute('animation', animation);
                
                console.log('New speed duration:', newspeed.toString());
                console.log(planet, animation);
                console.log('Speed + ' + animation.dur.toFixed(0));
            });
            


        });
    
    },


});


AFRAME.registerComponent('light+', {
    init: function () {
        console.log('Light + component initialized');
        this.el.addEventListener('click', function (e) {
            var light = document.getElementById('light');
            var intensity = light.getAttribute('light').intensity;
            intensity += 0.5;
            light.setAttribute('light', 'intensity', intensity);
            console.log('Light intensity increased to', intensity);
        })
    }
});


AFRAME.registerComponent('light-', {
    init: function () {
        console.log('Light + component initialized');
        this.el.addEventListener('click', function (e) {
            var light = document.getElementById('light');
            var intensity = light.getAttribute('light').intensity;
            intensity -= 0.5;
            light.setAttribute('light', 'intensity', intensity);
            console.log('Light intensity increased to', intensity);
        })
    }
});

AFRAME.registerComponent('Music+', {
    init: function () {
        console.log('Music + component initialized');
        this.el.addEventListener('click', function (e) {
            const Music = document.querySelector('#sound');
            var volume = Music.getAttribute('sound').volume;
            
        });
    }
});

