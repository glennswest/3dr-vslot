
function main(){
    theobj = main_section().translate([-30,-30,0]).rotateZ(-60);
    thecut = cube([20,20,200]).rotateZ(60);
    theobj = difference(
        theobj,
        thecut.translate([53.2,-24.5,1.204])
        );
    return(theobj);
}

