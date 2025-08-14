#!/bin/bash

echo "Build frontend"

cd frontend
npm install
npm run build
cp -r dist ../
