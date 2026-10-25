# DevOps Freelancer Portfolio



![Docker CI](https://github.com/ahmadbilal99p/portfolio/actions/workflows/docker.yml/badge.svg)



My portfolio website, packaged with Docker and tested automatically with GitHub Actions.

**Live site:** https://ahmadbilal99p.github.io/portfolio/

## What this project shows
- Website served with nginx inside a Docker container
- GitHub Actions pipeline that builds the image, runs the container and tests it on every push
- Live deployment with GitHub Pages

## Run it yourself
```bash
docker build -t my-portfolio .
docker run -d -p 8080:80 my-portfolio
