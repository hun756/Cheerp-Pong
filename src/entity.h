#ifndef PONG_GAME_ENTITY_H_ing8ua
#define PONG_GAME_ENTITY_H_ing8ua

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

/**
 * @brief 
 *  Base entity class for Paddle ComputerPaddle and 
 * @class Entity
 */
class Entity {
public:
    /**
     * @brief Construct a new Entity object
     * 
     * @param w 
     * @param h 
     * @param x 
     * @param y 
     */
    Entity(int w, int h, int x, int y);

    void draw(client::CanvasRenderingContext2D* context);

    ///< Setters and getters
    void setWidth(int width);
    int getWidth();
    void setHeight(int height); 
    int getHeight();
    void setX(int x); 
    int getX();
    void setY(int y); 
    int getY();
    void setXVal(int xVal); 
    int getXVal();
    void setYVal(int yVal); 
    int getYVal();

    ///<  ---------------------------------------------
protected:
    int width;
    int height;
    int x;
    int y;
    int xVal;
    int yVal;
};

#endif /* end of include guard : PONG_GAME_ENTITY_H_ing8ua */
