"use strict";

Vue.component('player', {
    template: `<div class="">
        <strong>{{playername}}</strong>
        <div>
            Level:
            <button class="btn btn-dark" v-on:click="counterLevel += 1">+</button> {{counterLevel}}
            <button class="btn btn-dark" v-on:click="counterLevel -= 1">-</button>
        </div>
        <div>
            Bonus:
            <button class="btn btn-dark" v-on:click="counterBonus+=1">+</button> {{counterBonus}}
            <button class="btn btn-dark" v-on:click="counterBonus-=1">-</button>
        </div>
        Total:{{counterLevel + counterBonus}}
        <button class="btn btn-danger" v-on:click="$emit(\'remove\')">X</button>
    </div>`,
    props: ['playername'],
    data: () => ({
        counterLevel: 1,
        counterBonus: 0,
    }),
    methods: {}
})
