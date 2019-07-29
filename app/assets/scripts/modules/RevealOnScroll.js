import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $(".feature-item");
        this.hideIntially();
        this.createWaypoints();
    }

    hideIntially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        this.itemsToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: "85%"
            });
        });
    }
}

export default RevealOnScroll;