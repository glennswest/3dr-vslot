

module motor_mount()
{
    import("3DR_Bottom_Motor_Mount_Vslot.stl", convexity=3);
}

module motor_boss()
{
  import("3DR_Bottom_Boss.stl", convexity=3);  
}


 module combined()
{
    rotate([0,0,120]) translate([14,-7.2,0]) rotate([0,0,180]) motor_mount();
    rotate([0,0,0])   translate([62,-67,0]) rotate([0,0,180]) motor_mount();
    rotate([0,0,240]) translate([90,4.1,0]) rotate([0,0,180]) motor_mount();
    rotate([0,0,0]) translate([6.5,-39,-.1]) rotate([0,0,0]) motor_boss();   
    
}
    
combined();
//translate([5,-40,-0]) rotate([0,0,91]) cylinder(r=30,h=20,$fn=3);