# Makefile for Node.js project using pnpm

NODE_ENV ?= development
PNPM = pnpm

.PHONY: all dev build test format clean update serve help

all: install

install:
	$(PNPM) install

dev:
	$(PNPM) run dev

build:
	$(PNPM) run build

test:
	$(PNPM) run test

format:
	$(PNPM) run format

clean:
	$(PNPM) store prune
	rm -rf node_modules
	rm -rf dist

update:
	$(PNPM) update

serve:
	$(PNPM) run start

help:
	@echo "Available Make targets:"
	@echo "  install    - Install project dependencies"
	@echo "  dev        - Start development server"
	@echo "  build      - Build production version"
	@echo "  test       - Run tests"
	@echo "  format     - Run code formatting"
	@echo "  clean      - Clean build artifacts"
	@echo "  update     - Update dependencies"
	@echo "  serve      - Start server"
