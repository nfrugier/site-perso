import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'portfolio';

    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '110%',
            'height': '110%',
            'z-index':-1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 150,
                },
                color: {
                    value: '#bf0000'
                },
                shape: {
                    type: 'polygon',
                    polygon:{
                        nb_slides : 6
                    }
                },
                out_mode: {
                    value : 'out',
                }
            },
            interactivity:{
                events: {
                    onhover: {
                        enable: false,
                    }
            }
        }
        };
    }
}
