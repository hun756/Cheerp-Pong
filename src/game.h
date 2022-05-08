#ifndef PONG_GAME_H_dh6zl0
#define PONG_GAME_H_dh6zl0

#include "ball.h"

class Paddle;
class ComputerPaddle;

/** definitions */
#define COLOR_WHITE "#fff"
#define COLOR_BLACK "#000"

/** Key Bindings */
enum class KeyBindings : uint8_t {
    Up = 38,
    Down = 40
};

class [[cheerp::genericjs]] Game {
public:
    /**
     * @brief Construct a new Game object
     * 
     */
    Game();
private:

    void boardDetail();

public:
    /**
     * @brief 
     *  Main game loop
     */
    void loop();

    /** Update game */
    void update();

    /** Draw game objects */
    void draw();

public:
    static client::Map*                 keysPressed;
    static int                          playerScore;
    static int                          computerScore;

private:
    client::HTMLCanvasElement*          gameCanvas;
    client::CanvasRenderingContext2D*   gameContext;
    Paddle*                             player;
    ComputerPaddle*                     computerPlayer;
    Ball*                               ball;
};

#endif /* end of include guard : PONG_GAME_H_dh6zl0 */
