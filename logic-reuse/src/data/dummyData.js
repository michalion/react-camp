const comments = [
  { author: "Nick", text: "I use prop-types" },
  { author: "Maja", text: "Woof! 🐕" },
  { author: "Michal", text: "you need more ☕" },
  { author: "Bank", text: "do not enter CID" },
  { author: "React", text: "Psst... wanna some composition?" },
];

const blogs = [
  { author: "Nick", text: "Making DOM dance zorba" },
  { author: "React", text: "HOC in action" },
  { author: "Maja", text: "🐕" },
  { author: "EPAM", text: "Bootcamp is cool 😎" },
  { author: "Michal", text: "Billable ☕ during work" },
];

const calculateTheSlice = (dataSource) => (index) => {
  const normalizedIndex = index % 5;
  const slice = dataSource.slice(normalizedIndex, normalizedIndex + 3);

  // No, repeating 2 first elements in the array is not acceptable
  if (slice.length === 1) return [...slice, dataSource[0], dataSource[1]];
  if (slice.length === 2) return [...slice, dataSource[0]];

  return slice;
};

export const getComments = calculateTheSlice(comments);
export const getBlogs = calculateTheSlice(blogs);
