#include "game.h"
#include "paddle.h"

/** Assign Static Variables */
int Game::playerScore = 0;
int Game::computerScore = 0;
client::Map* Game::keysPressed = new client::Map();

Game::Game() {
    
        gameCanvas = static_cast<client::HTMLCanvasElement*>(
            client::document.getElementById("app")
        );
        
        if (gameCanvas) {
            gameContext = static_cast<client::CanvasRenderingContext2D*>(
                gameCanvas->getContext("2d")
            );
        }           

        gameContext->set_font("30px Orbitron");

        client::window.addEventListener(
            "keydown", 
            cheerp::Callback([](client::KeyboardEvent* e) {
                Game::keysPressed->set(static_cast<int>(e->get_which()), true);
            })
        );

        client::window.addEventListener(
            "keyup", 
            cheerp::Callback([](client::KeyboardEvent* e) {
                Game::keysPressed->set(static_cast<int>(e->get_which()), false);
            })
        );

        int paddleWidth = 20, paddleHeight = 60, ballSize = 10, wallOffset = 20;

        player = new Paddle(paddleWidth, paddleHeight, wallOffset, 
            gameCanvas->get_height() / 2 - paddleHeight / 2
        );

        computerPlayer = new ComputerPaddle(paddleWidth, paddleHeight, 
            gameCanvas->get_width() - (wallOffset + paddleWidth) ,
            gameCanvas->get_height() / 2 - paddleHeight / 2
        );

        ball = new Ball(ballSize, ballSize, 
            gameCanvas->get_width() / 2 - ballSize / 2, 
            gameCanvas->get_height() / 2 - ballSize / 2
        );
}

void Game::boardDetail() {
    gameContext->set_strokeStyle(COLOR_WHITE);
        gameContext->set_lineWidth(static_cast<double>(5));

        gameContext->strokeRect(10, 10, gameCanvas->get_width() - 20, 
            gameCanvas->get_height() - 20
        );

        ///< Drawing center lines
        auto cHeight = gameCanvas->get_height();
        auto cWidth = gameCanvas->get_width();

        for (size_t i = 0; i + 30 < cHeight; i += 30) {
            gameContext->set_fillStyle(COLOR_WHITE);
            gameContext->fillRect(cWidth / 2 - 10, i + 10, 15, 20);
        }

        ///< Drawing scores
        gameContext->fillText(
            client::Number(Game::playerScore)
            .toString(), 280, 50
        );

        gameContext->fillText(
            client::Number(Game::computerScore)
            .toString(), 390, 50
        );
}

void Game::loop() {
    update();
    draw();
    client::requestAnimationFrame(
        cheerp::Callback([this]() {
            loop();
        })
    );
}

void Game::update() {
    player->update(gameCanvas);
    computerPlayer->update(ball, gameCanvas);
    ball->update(player, computerPlayer, gameCanvas);
}

void Game::draw() {
    gameContext->set_fillStyle(COLOR_BLACK);
    gameContext->fillRect(0, 0, gameCanvas->get_width(), gameCanvas->get_height());     
    boardDetail();
    player->draw(gameContext);
    computerPlayer->draw(gameContext);
    ball->draw(gameContext);
}
