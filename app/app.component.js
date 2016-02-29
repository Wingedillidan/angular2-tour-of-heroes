(function(app) {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }

    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: `<h1>{{title}}</h1>
                       <h2>My Heroes</h2>
                       <ul class="heroes">
                           <li *ngFor="#hero of heroes">
                               <span class="badge">{{hero.id}}</span> {{hero.name}}
                           </li>
                       </ul>
                       <h2>{{hero.name}} details!</h2>
                       <div><label>id: </label>{{hero.id}}</div>
                       <div>
                           <label>name: </label>
                           <div><input [(ngModel)]="hero.name" placeholder="name"></div>
                       </div>`,
            styles:[`
                .selected {
                    background-color: #CFD8DC !important;
                    color: white;
                }
                .heroes {
                    margin: 0 0 2em 0;
                    list-style-type: none;
                    padding: 0;
                    width: 10em;
                }
                .heroes li {
                    cursor: pointer;
                    position: relative;
                    left: 0;
                    background-color: #EEE;
                    margin: .5em;
                    padding: .3em 0em;
                    height: 1.6em;
                    border-radius: 4px;
                }
                `]
        })
        .Class({
            constructor: function() {
                this.title = 'Tour of Heroes';
                this.hero = new Hero(1, 'Windstorm');
                this.heroes = HEROES;
            }
        });

    var HEROES = [
        new Hero(11, 'Mr. Nice'),
        new Hero(12, 'Narco'),
        new Hero(13, 'Bombasto'),
        new Hero(14, 'Celeritas'),
        new Hero(15, 'Magneta'),
        new Hero(16, 'RubberMan'),
        new Hero(17, 'Dynama'),
        new Hero(18, 'Dr IQ'),
        new Hero(19, 'Magma'),
        new Hero(20, 'Tornado'),
    ]
})(window.app || (window.app = {}));
