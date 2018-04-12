
class OursButtons extends Visual
{
	var Color;
	var X;
	var Y;
	var Height;
	var Width;
	var TexrInside;
render()
    {
        ctx.fillStyle = Color;
        ctx.fillRect(X, Y, Width, Height);
		ctx.textAlign = "center"
		ctx.textBaseline = "center"
		ctx.font = Height+"px Times Roman";
		ctx.fillStyle = "black";
        ctx.fillText(TexrInside, X+Width/2, Y+(Height/2)+(Height/3));
    }
	
constructor()
    {
        super(null); /* as this class extends from Visual, you must always call super() */

        /* These variables depend on the animation */
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvasCtx = this.offscreenCanvas.getContext('2d');
        this.offscreenCanvas.width = canvas.width;
        this.offscreenCanvas.height = canvas.height;
    }
	
setButtonParametrs(colorOfButton, positionX, positionY, textOnButton, heightOfButton, widthOfButton)
{
	Color=colorOfButton;
	X=positionX;
	Y=positionY;
	TexrInside=textOnButton;
	Height=heightOfButton;
	Width=widthOfButton;
}

oursOnClick(MouseX, MouseY)
{
	if(MouseX>X && MouseX<(X+Width))
						{
							if(MouseY>Y && MouseY<(Y+Height))
							{
								alert("x:" + MouseX + "    y:" + MouseY);
							}
							
						}
}



}