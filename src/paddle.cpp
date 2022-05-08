#include "paddle.h"

Paddle::Paddle(int w, int h, int x, int y) : Entity(w, h, x, y) {
}

void Paddle::update(client::HTMLCanvasElement* canvas) {
    if(Game::keysPressed->get<int, bool>(static_cast<int>(KeyBindings::Up))) {
        yVal = -1;
        if(y <= 20) {
            yVal = 0;
        }
    } else if(Game::keysPressed->get<int, bool>(static_cast<int>(KeyBindings::Down))) {
        yVal = 1;
        if(y + height > canvas->get_height() - 20) {
            yVal = 0;
        } 
    } else {
        yVal = 0;
    }

    y += yVal * speed;
}

ComputerPaddle::ComputerPaddle(int w, int h, int x, int y) : Entity(w, h, x, y) {
}

void ComputerPaddle::update(Ball* ball, client::HTMLCanvasElement* canvas) {
    ///< chase ball
    if(ball->getY() < y && ball->getXVal() == 1){
        yVal = -1; 
        
        if(y <= 20){
            yVal = 0;
        }
    }
    else if(ball->getY() > y + height && ball->getXVal() == 1){
        yVal = 1;
        
        if(y + height >= canvas->get_height() - 20){
            yVal = 0;
        }
    }
    else{
        yVal = 0;
    }
    
    y += yVal * speed;   
}