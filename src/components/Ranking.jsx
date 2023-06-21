import React from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Ranking = () => {
  const {data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader/>;

  return (
    <>
      <Row>
      
        <Col span={6}><strong>Exchanges</strong></Col>
        <Col span={6}><strong>24h Trade Volume</strong></Col>
        <Col span={6}><strong>No. of Markets</strong></Col>
        <Col span={6}><strong>Price</strong></Col>
      </Row>
      
      <br/>
      <Row>
        {exchangesList?.map((exchanges)=> (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchanges.name}
                showArrow={false}
                header={(
                  <Row key={exchanges.name}>
                    <Col span={6}>
                      <Text><strong>{exchanges.rank}</strong></Text>
                      <Avatar className='exchange-image' src={exchanges.iconUrl} />
                      <Text><strong>{exchanges.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchanges?.["24hVolume"])}</Col>
                    <Col span={6}>{millify(exchanges.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchanges.price)}</Col>
                  </Row>
                )}
              >      
              {HTMLReactParser(exchanges.coinrankingUrl || '')}         
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>

    </>
  );
};

export default Ranking
