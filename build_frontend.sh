#!/bin/bash

echo "Build frontend"

cd frontend
npm run build
cp -r dist ../
