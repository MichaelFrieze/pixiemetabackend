module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },
    },
  },
  redis: {
    config: {
      connections: {
        default: {
          connection:
            "rediss://:31562cfc3add43a6afa9ab82075c9538@global-better-raptor-30333.upstash.io:30333",
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: { name: "redis" },
      strategy: {
        contentTypes: [
          { contentType: "api::blog-post.blog-post", hitpass: false },
          { contentType: "api::team-member.team-member", hitpass: false },
        ],
        // debug: true,
      },
    },
  },
});
