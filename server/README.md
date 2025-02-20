# server

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


# Container setup 
1. Build container image 
  ```
  podman build -t chat .
  ```
2. Run the container 
```
podman run -p 3000:80 chat
```

3. Tag the container 
```
podman tag chat:latest 593793042298.dkr.ecr.eu-north-1.amazonaws.com/chat:latest
```
4. Push container to ECR 
```
podman push 593793042298.dkr.ecr.eu-north-1.amazonaws.com/chat:latest
```
