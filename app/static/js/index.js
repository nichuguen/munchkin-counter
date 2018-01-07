"use strict";


var app = new Vue({
    el: '#app',
    data: {
        listPlayers: []
    },
    methods: {
        addPlayer: function() {
            let playerName = $("#playerToAdd").val();
            if (playerName.length > 0) {
                this.listPlayers.push(playerName);
            }
            $("#playerToAdd").val("");
            $("#playerToAdd").focus();
        },
        removePlayer: function(index) {
            let isToDelete = confirm("Are you sure you want to delete the player " + this.listPlayers[index] + "?");
            if (isToDelete) {
                this.listPlayers.splice(index, 1);
            }
        },
        resetScores: function(index) {
            let isToReset = confirm("Are you sure you want to reset all the scores?");
            if (isToReset) {
                let listTmp = this.listPlayers.slice(); // copy
                this.listPlayers = []; //clear
                let ref = this.listPlayers;

                Vue.nextTick(() => listTmp.forEach(p => ref.push(p)));
            }
        },
        deleteAllPlayer: function(index) {
            let isToDelete = confirm("Are you sure you want to delete all the players ? ");
            if (isToDelete) {
                this.listPlayers = [];
            }
        }
    },
});
