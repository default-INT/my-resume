export const getAssetPath = (path: string): string => {
  const prefix = process.env.NEXT_PUBLIC_PREFIX_URL || '';

return `${prefix}${path}`;
};
