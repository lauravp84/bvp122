function setup() {
    createCanvas(800, 600); // Largura x Altura da tela
}

function draw() {
    background(220); // Cor de fundo

    // Desenhe formas (exemplo):
    fill(255, 0, 0); // Cor vermelha
    ellipse(100, 100, 50, 50); // Círculo
    fill(0, 0, 255); // Cor azul
    rect(200, 200, 80, 60); // Retângulo
    fill(0, 255, 0); // Cor verde
    ellipse(300, 300, 70, 70); // Elipse

    // Acesse a webcam e exiba-a na tela (fora do escopo deste exemplo)
    // Brinque com as coordenadas X e Y para posicionar as formas
}
