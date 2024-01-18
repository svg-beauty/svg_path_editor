import NextHead from 'next/head';
import NextScript from 'next/script';
import getConfig from 'next/config';

export default function Head({ instructions, svgText }) {
  const { publicRuntimeConfig } = getConfig();
  return (
    <>
      <NextHead>
        <title>SVG Path Editor</title>
        <meta
          name='description'
          content='Interactive tool to edit an SVG by editing the path commands that describe its shape'
        />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/svg+xml'
          href={`data:image/svg+xml,${encodeURIComponent(svgText)}`}
        />

        <style>
          {instructions
            .map(
              (_, i) =>
                `
                .highlight-${i} {
                  display: none;
                }

                .main:has(.command-${i}:focus-within) .highlight-${i},
                .main:has(.command-${i}:hover) .highlight-${i} {
                  display: inline;
                }
          `
            )
            .join('')}
        </style>
      </NextHead>
    </>
  );
}
