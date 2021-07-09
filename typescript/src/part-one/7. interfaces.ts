/**
 *  interfaces
 */

type BlogPost = {
  header: Header;
  body: string;
};

let post: BlogPost;

function createBlogPost(header: Header, body: string) {
  return {
    header,
    body,
  };
}

post = createBlogPost({ fontSize: 18, text: "foo" }, "bar");

/**
 * properties of interfaces
 */

// interface reuse
interface PromotedBlogPost {
  calculatePrice(): number;
  // optional property
  // adCampaign: string
}

// index signature (danger!)
interface FeatureFlags {
  [key: string]: string;
}

const flag: FeatureFlags = {
  foo: "bar",
  baz: "foo",
};
