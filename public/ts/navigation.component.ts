import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navigation',
    template: `
    <nav class="navbar navbar-default" role="navigation">
    
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Sakila App</a>
            </div>
    
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a [routerLink]="['/home']">Home</a>
                    </li>
                    <li>
                        <a [routerLink]="['/about']">About</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
    </nav>    
    `
})

export class NavigationComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}