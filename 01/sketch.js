function setup() { 
	
  createCanvas(800, 600); // creando espacio de trabajo
  background(226,226,226); // creando fondo del cuadro (nube gris claro)
	
	strokeWeight(5); // tamaño lapiz linea horizontal 1
	stroke(0,0,0); // color lapiz
	line(0,70,440,70); // trazo linea horizontal 1
	
  strokeWeight(1); // tamaño lapiz figura 1 : triangulo amarillo
	fill(255,215,69); // color relleno figura 1 : triangulo amarillo
	beginShape(); // 	trazo triangulo amarillo 
	vertex(442,70); // linea 1 
	vertex(550,340); // linea 2 
  vertex(270,270); // cierre triangulo amarillo
	endShape(CLOSE)
  
  strokeWeight(1); // tamaño lápiz figura 2: circulo azul agua
	fill(16,139,139); // color relleno figura 2: circulo azul agua
	ellipse(470,400,270); // trazo circulo azul agua
  
  strokeWeight(5); // tamaño pincel figura 3: cuadro rojo
  fill(127,4,4); // color relleno figura 3: cuadro rojo
  rect(587,470,110,100); // trazo cuadro rojo
  
  strokeWeight(5); // tamaño lapiz linea horizontal 2
  line(650,510,750,510); // trazo lina horizontal 2
  
  strokeWeight(7); // tamaño lapiz linea horizontal 3
  line(650,530,750,530); //trazo linea horizontal 3
  
  strokeWeight(5); // tamaño lapiz linea diagonal 1-2
  line(450,0,800,550); // trazo linea diagonal 2
  line(520,0,570,80); // trazo linea diagonal 2
  
  strokeWeight(1); // tamaño lápiz figura 3: circulo azul violeta
	fill(70,3,203); // color relleno figura 3: circulo azul violeta
  ellipse(175,240,150); // trazo circulo azul violeta
  
  strokeWeight(9); // tamaño lapiz linea diagonal 3
  line(150,0,450,350); // trazo linea diagonal 3
  
  strokeWeight(5); // tamaño lapiz linea diagonal 4
  line(100,0,280,590); // trazo linea diagonal 4
  
  line(0,240,410,240); // trazo linea horizontal 4
  
  //synthaxis de la curva arc(x,y,w,h,start,stop,[mode]

  strokeWeight(2); // tamaño lapiz curvas
  noFill(); // quitando el relleno de la figura anterior (circulo azul violeta)
  
  //acá me quedé, me ganó la curva

arc(180,60,200,200, PI + QUARTER_PI, TWO_PI);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}