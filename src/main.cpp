#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "game.h"

/** Application EntryPoint */
void webMain() {
    auto _instance = new Game();
    _instance->loop();
    
    // client::requestAnimationFrame(cheerp::Callback(std::bind(&Game::loop, &_instance)));
    // client::requestAnimationFrame(cheerp::Callback([&](){
    //     _instance->loop();
    // }));
}