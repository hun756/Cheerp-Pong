#include "entity.h"

Entity::Entity(int w, int h, int x, int y) 
    : width(w), height(h), x(x), y(y) {
}

void Entity::draw(client::CanvasRenderingContext2D* context) {
    context->set_fillStyle("#fff");
    context->fillRect(x, y, width, height);
}

void Entity::setWidth(int width) { this->width = width; } 
int Entity::getWidth() { return this->width; }
void Entity::setHeight(int height) { this->height = height; } 
int Entity::getHeight() { return this->height; }
void Entity::setX(int x) { this->x = x; } 
int Entity::getX() { return this->x; }
void Entity::setY(int y) { this->y = y; } 
int Entity::getY() { return this->y; }
void Entity::setXVal(int xVal) { this->xVal = xVal; } 
int Entity::getXVal() { return this->xVal; }
void Entity::setYVal(int yVal) { this->yVal = yVal; } 
int Entity::getYVal() { return this->yVal; }