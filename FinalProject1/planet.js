//Creating new Class called planets containing physical characteristics of different planets in Solar system
class Planet {
    constructor(radius, distance, orbitSpeed, color) {
      this.radius = radius
      this.angle = random(TWO_PI)
      this.distance = distance
      this.orbitSpeed = orbitSpeed
      this.color = color
    }
  
    show() {
      push()
      fill(this.color)
      rotate(this.angle)
      translate(this.distance, 0)
      ellipse(0,0, this.radius)
      pop()
    }
  // code for movement of planets in p5 animation
    orbit() {
      this.angle += this.orbitSpeed
    }
  }