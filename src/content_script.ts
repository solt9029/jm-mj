import * as $ from 'jquery';

function replaceJMWithManager(element) {
    $(element).contents().each(function() {
        if (this.nodeType === 3) { // if text node
            this.nodeValue = this.nodeValue.replace(/JM/g, 'Manager');
        } else if (this.nodeType === 1) { // if element node
            replaceJMWithManager(this); 
        }
    });
}

replaceJMWithManager($('body'));
