function main(){
    theobj = top_section().translate([-70,-70,0]).rotateZ(-60);
    thecut = cube([20,20,200]);
    theobj = difference(
        theobj,
        thecut.translate([-16.1,47.7,0])
        );
    return(theobj);
}

