/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/12/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../../../core/fontSize';
import {blue_bluezone, red_bluezone} from '../../../../../../core/color';
import {heightPercentageToDP} from '../../../../../../core/utils/dimension';

const styles = StyleSheet.create({
  textStatus:{
    color:'#949494',
    fontSize: fontSize.normal,
  },
  group: {
    backgroundColor: '#FFF',
    borderRadius: 200,
    padding: 10,
  },
  textTotalBmi: {
    fontWeight: 'bold',
    fontSize: fontSize.biggest,
  },
  container: {
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  },
});

export default styles;
