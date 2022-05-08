#ifndef PONG_GAME_BALL_H_w399fq
#define PONG_GAME_BALL_H_w399fq

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "entity.h"

class Paddle;
class ComputerPaddle;
class Game;

class Ball: public Entity {
public:
    /**
     * @brief Construct a new Ball object
     * 
     */
    Ball(int w, int h, int x, int y);

    /**
     * @brief 
     * 
     * @param player 
     * @param computer 
     * @param canvas 
     */
    void update(Paddle* player, ComputerPaddle* computer, client::HTMLCanvasElement* canvas);
private:
    int speed = 4;
};

#endif /* end of include guard : PONG_GAME_BALL_H_w399fq */
