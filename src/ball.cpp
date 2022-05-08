#include "ball.h"
#include "game.h"
#include "paddle.h"

Ball::Ball(int w, int h, int x, int y): Entity(w, h, x, y) {
    auto randomDirection = (int)(client::Math.floor(client::Math.random() * 2) + 1); 
        randomDirection % 2 ? xVal = 1 : xVal = -1;
        yVal = 1;
}

void Ball::update(
    Paddle *player,
    ComputerPaddle *computer,
    client::HTMLCanvasElement *canvas
) {
    ///< check top canvas bounds
    if (y <= 10) {
        yVal = 1;
    }
    
    ///< check bottom canvas bounds
    if (y + height >= canvas->get_height() - 10) {
        yVal = -1;
    }
    
    ///< check left canvas bounds
    if (x <= 0) {  
        x = canvas->get_width() / 2 - width / 2;
        Game::computerScore += 1;
    }
    
    ///< check right canvas bounds
    if (x + width >= canvas->get_width()) {
        x = canvas->get_width() / 2 - width / 2;
        Game::playerScore += 1;
    }
    
    
    ///< check player collision
    if (x <= player->getX() + player->getWidth()) {
        if(y >= player->getY() && y + height <= player->getY() + player->getHeight()) {
            xVal = 1;
        }
    }
    
    ///< check computer collision
    if (x + width >= computer->getX()) {
        if (y >= computer->getY() && y + height <= computer->getY() + computer->getHeight()) {
            xVal = -1;
        }
    }
    
    x += xVal * speed;
    y += yVal * speed;
}