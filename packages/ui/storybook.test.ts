import * as path from 'path'
import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';

const multiSnapshotWithOptions = (options = {}) => ({
  story,
  context,
  renderTree,
}: {
  story: any
  context: any
  renderTree: any
}) =>
  snapshotWithOptions(options)({
    story,
    context,
    renderTree,
    snapshotFileName: path.join('__snapshots__', context.fileName),
  });

initStoryshots({
  test: multiSnapshotWithOptions({}),
})