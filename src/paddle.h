#ifndef PONG_GAME_PADDLE_H_us8ovh
#define PONG_GAME_PADDLE_H_us8ovh

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "entity.h"
#include "game.h"

class [[cheerp::genericjs]] Paddle : public Entity {
public:
    /**
     * @brief Construct a new Paddle object
     * 
     * @param w 
     *  Paddle width
     * @param h 
     *  Paddle height
     * @param x 
     *  x coordinate
     * @param y 
     *  y coordinate
     */
    Paddle(int w, int h, int x, int y);

    /**
     * @brief 
     *  This method updates the user paddle on the canvas.
     * 
     * @param canvas 
     */
    void update(client::HTMLCanvasElement* canvas);
private:    
    int speed = 8;
};

class [[cheerp::genericjs]] ComputerPaddle: public Entity {
public:
    /**
     * @brief Construct a new Computer Paddle object
     * 
     * @param w 
     *  Paddle width
     * @param h 
     *  Paddle height
     * @param x 
     *  x coordinate
     * @param y 
     *  y coordinate
     */
    ComputerPaddle(int w, int h, int x, int y);

    /**
     * @brief 
     *  This method updates the Computer paddle on the canvas.
     * 
     * @param canvas 
     */
    void update(Ball* ball, client::HTMLCanvasElement* canvas);
private:
    int speed = 8;
};


#endif /* end of include guard : PONG_GAME_PADDLE_H_us8ovh */
