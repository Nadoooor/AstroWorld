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

AFRAME.registerComponent('music+', {
    init: function () {
        console.log('Music + component initialized');
        this.el.addEventListener('click', function (e) {
            const Music = document.querySelector('#sound');
            var volume = Music.getAttribute('sound').volume;
            const volprc = document.querySelectorAll('.volprc');
            volume += 0.1;
            var newvol = 0;
            volprc.forEach(vol => {
                var volval = vol.getAttribute('value');
                newvol = parseInt(volval) + 10; 
                if (newvol > 100){
                    newvol = 100;
                } else if (newvol < 0){
                    newvol = 0;
                }
                vol.setAttribute('value', newvol.toString() + '%');
            });
            if (volume > 1 ){
                volume = 1;
            } else if (volume < 0 ){
                volume = 0;
            }
            Music.setAttribute('sound', 'volume', volume);
            console.log('Music volume increased to', volume, newvol.toString() + '%');

        });
    }
});

AFRAME.registerComponent('music-', {
    init: function () {
        console.log('Music + component initialized');
        this.el.addEventListener('click', function (e) {
            const Music = document.querySelector('#sound');
            var volume = Music.getAttribute('sound').volume;
            const volprc = document.querySelectorAll('.volprc');
            volume -= 0.1;
            var newvol = 0;
            volprc.forEach(vol => {
                var volval = vol.getAttribute('value');
                newvol = parseInt(volval) - 10; 
                if (newvol > 100){
                    newvol = 100;
                } else if (newvol < 0){
                    newvol = 0;
                }
                vol.setAttribute('value', newvol.toString() + '%');
            });
            if (volume > 1 ){
                volume = 1;
            } else if (volume < 0 ){
                volume = 0;
            }
            Music.setAttribute('sound', 'volume', volume);
            console.log('Music volume increased to', volume, newvol.toString() + '%');

        });
    }
});



AFRAME.registerComponent('controlpanal', {


    init: function () {
        const click = new Audio('Click.mp3');
        click.volume = 0.3;
      window.addEventListener('keydown', function (e) {
        const controlPanal = document.querySelector('#controlpanal');
        var cam = document.querySelector('#camera');
        var campos = new THREE.Vector3();
        cam.object3D.getWorldPosition(campos);
        var camrot = new THREE.Quaternion();
        cam.object3D.getWorldQuaternion(camrot);
        var camdir = new THREE.Vector3();
        cam.object3D.getWorldDirection(camdir);
        campos.add(camdir.multiplyScalar(-5));
        if (e.key === 'T' || e.key === 't'){
                    click.play();

            console.log('T key pressed - Moving Control Panel Up');
            var PanalTrans = new Ammo.btTransform();
            PanalTrans.setIdentity();
            PanalTrans.setOrigin(new Ammo.btVector3(campos.x, campos.y, campos.z))
            PanalTrans.setRotation(new Ammo.btQuaternion(camrot.x, camrot.y, camrot.z, camrot.w));
            controlPanal.body.setWorldTransform(PanalTrans);
            controlPanal.body.activate();
            console.log('Control Panel moved to camera position due to key press:', controlPanal.body ,e.key);

        }
      });
    },


});

AFRAME.registerComponent('call', {
    schema:{
        targetid: {type: 'string', default: ''},
    },

    init: function () {
        const click = new Audio('Click.mp3');
       click.volume = 0.3;
        const target = this.data.targetid;
         console.log(target);
         var canclick = true;
      this.el.addEventListener('click', function (e) {
          console.log(canclick);
        if (canclick === true){
        click.play();
        const INFOPanal = document.getElementById(target);
        // console.log(this.data.targetid);
        var cam = document.querySelector('#camera');
        var campos = new THREE.Vector3();
        cam.object3D.getWorldPosition(campos);
        var camrot = new THREE.Quaternion();
        cam.object3D.getWorldQuaternion(camrot);
        var camdir = new THREE.Vector3();
        cam.object3D.getWorldDirection(camdir);
        campos.add(camdir.multiplyScalar(-5));
            var PanalTrans = new Ammo.btTransform();
            PanalTrans.setIdentity();
            PanalTrans.setOrigin(new Ammo.btVector3(campos.x, campos.y, campos.z))
            PanalTrans.setRotation(new Ammo.btQuaternion(camrot.x, camrot.y, camrot.z, camrot.w));
            INFOPanal.body.setWorldTransform(PanalTrans);
            INFOPanal.body.activate();
            canclick = false;
            setTimeout(() => {
                canclick = true;
console.log('Click re-enabled');
            }, 3000)} else {
                console.log('Please wait before clicking again.');
            }
        
      });
    },


});



AFRAME.registerComponent('run', {
    init: function () {
        const cam = document.querySelector('#camera');
      window.addEventListener('keydown', function (e) {

        if (e.key === 'shift' || e.key === 'Shift'){
         cam.setAttribute('wasd-controls', 'acceleration', '500');
        }
      });
        window.addEventListener('keyup', function (e) {
        if (e.key === 'shift' || e.key === 'Shift'){
         cam.setAttribute('wasd-controls', 'acceleration', '100');

        }
      }); 
    },
});