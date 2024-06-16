#!/bin/bash

# # Variables
# REPO_NAME=$(basename `git rev-parse --show-toplevel`)
# ARCHIVE_NAME="${REPO_NAME}.tar.gz"
# EC2_USER="ubuntu"
# EC2_HOST="your-ec2-public-ip"
# EC2_KEY="path/to/your-key.pem"
# REMOTE_PATH="/home/ec2-user/repo"  # Use the symlinked path

echo "the name $CCC_ARCHIVE_NAME"

# Step 1: Compress the repository
echo "Compressing the repository..."
#tar -czvf $CCC_ARCHIVE_NAME -C $(dirname `git rev-parse --show-toplevel`) $CCC_REPO_NAME
tar -czvf $CCC_ARCHIVE_NAME ../$CCC_REPO_NAME

# Step 2: Transfer the compressed file to the EC2 instance
echo "Transferring the compressed file to the EC2 instance..."
scp -i $CCC_EC2_KEY $CCC_ARCHIVE_NAME $CCC_EC2_USER@$CCC_EC2_HOST:$CCC_REMOTE_PATH

# Step 3: Uncompress the file on the EC2 instance
echo "Uncompressing the file on the EC2 instance..."
ssh -i $CCC_EC2_KEY $CCC_EC2_USER@$CCC_EC2_HOST "cd $CCC_REMOTE_PATH && tar -xzvf $CCC_ARCHIVE_NAME && rm $CCC_ARCHIVE_NAME"

# Cleanup local compressed file
echo "Cleaning up local compressed file..."
rm $CCC_ARCHIVE_NAME

echo -e "Copied $CCC_ARCHIVE_NAME to the remote server!"
