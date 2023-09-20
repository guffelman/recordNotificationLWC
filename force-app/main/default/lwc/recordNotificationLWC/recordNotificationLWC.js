import { LightningElement, api } from 'lwc';

export default class RecordNotificationLWC extends LightningElement {

   @api warningMessage = 'This is a warning message!';
   @api symbol = '';
   @api type = 'warning';
   @api bgColor;
   @api textStyle;
   @api symbolContainer;
   @api symbolTextStyle;
    connectedCallback() {
        switch (this.type) {
            case 'warning':
                if (!this.symbol) {
                    this.symbol = '!';
                }
                this.symbolContainer = 'background-color: rgba(255, 255, 124, 0.7); box-shadow: 0 0 0 5px rgba(255, 255, 124, 0.4);';
                this.bgColor = 'background-color: rgba(255, 255, 0, 0.4);';
                this.textStyle = 'color: rgba(0, 0, 0, 0.7);';
                this.symbolTextStyle = 'color: rgba(0, 0, 0, 0.7);';
                break;
            case 'error':
                if (!this.symbol) {
                    this.symbol = 'X';
                }
                this.symbolContainer = 'background-color: rgba(255, 0, 0, 0.7); box-shadow: 0 0 0 5px rgba(255, 0, 0, 0.4);';
                this.bgColor = 'background-color: rgba(255, 0, 0, 0.4);';
                this.textStyle = 'color: rgba(255, 255, 255, 0.7);';
                this.symbolTextStyle = 'color: rgba(255, 255, 255, 0.7);';
                break;
            case 'success':
                if (!this.symbol) {
                    this.symbol = '✓';
                }
                this.symbolContainer = 'background-color: rgba(0, 255, 0, 0.7); box-shadow: 0 0 0 5px rgba(0, 255, 0, 0.4); ';
                this.bgColor = 'background-color: rgba(0, 255, 0, 0.4);';
                this.textStyle = 'color: rgba(0, 0, 0, 0.7);';
                this.symbolTextStyle = 'color: rgba(0, 0, 0, 0.7);';
                break;
            case 'info':
                if (!this.symbol) {
                    this.symbol = 'i';
                }
                this.symbolContainer = 'background-color: rgba(0, 0, 255, 0.7); box-shadow: 0 0 0 5px rgba(0, 0, 255, 0.4);';
                this.bgColor = 'background-color: rgba(0, 0, 255, 0.4);';
                this.textStyle = 'color: rgba(255, 255, 255, 0.7);';
                this.symbolTextStyle = 'color: rgba(255, 255, 255, 0.7);';
                break;
            default:
                if (!this.symbol) {
                    this.symbol = '!';
                }
                this.symbolContainer = 'background-color: rgba(255, 255, 124, 0.7); box-shadow: 0 0 0 5px rgba(255, 255, 124, 0.4);';
                this.bgColor = 'background-color: rgba(255, 255, 0, 0.4);';
                this.textStyle = 'color: rgba(0, 0, 0, 0.7);';
                this.symbolTextStyle = 'color: rgba(0, 0, 0, 0.7);';
        }

    }

}