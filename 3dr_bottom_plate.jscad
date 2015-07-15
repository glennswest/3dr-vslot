include("motor_mount.jscad");



function motor_boss()
{
  //include("3DR_Bottom_Boss.stl");  
}


 function combined()
{
      a = rotate([0,0,120], translate([14,-7.2,0], rotate([0,0,180], motor_mount())));
      b = rotate([0,0,240], translate([62,-67,0], rotate([0,0,180], motor_mount())));
      c = rotate([0,0,0],   translate([90,4.1,0], rotate([0,0,180], motor_mount())));
    return  union (a,b,c);
    
}
    

//translate([5,-40,-0]) rotate([0,0,91]) cylinder(r=30,h=20,$fn=3);
function main(){
    return combined();
}


