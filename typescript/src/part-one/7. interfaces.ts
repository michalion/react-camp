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
interface PromotedBlogPost extends BlogPost {
  calculatePrice(): number;
  // optional property
  adCampaign?: string;
}

let promotedPost: PromotedBlogPost = {
  header: { fontSize: 18, text: "New Product !!!oneone" },
  body: "fancy text, buy my product",
  calculatePrice: () => 10,
};

let dictionary = {
  a: "foo",
  b: "bar",
  c: "baz",
};

// index signature (danger!)
interface FeatureFlags {
  [key: string]: string;
}

const flag: FeatureFlags = {
  foo: "bar",
  baz: "foo",
};
