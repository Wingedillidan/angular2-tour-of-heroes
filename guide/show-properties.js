function DisplayComponent() {
    this.myName = "Alice";
    this.names = ["Aarav", "Martin", "Shannon", "Ariana", "Kai"];
}
DisplayComponent.annotations = [
    new angular.ComponentAnnotation({
        selector: "display"
    }),
    new angular.ViewAnnotation({
        template: `
            <p>My name: {{ myName }}</p>
            <p>Friends:</p>
            <ul>
                <li *ng-for="#name of names">
                    {{ name }}
                </li>
            </ul>
        `,
        directives: [angular.NgFor]
    })
];
