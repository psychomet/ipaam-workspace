import React from 'react';

import { PageHeader, Space, Typography, List, Row, Col, Card } from 'antd';
import { items } from '../../../mocks/menu-data';

const { Title, Text } = Typography;

interface IProps {}

const CheckTransfer: React.FC<IProps> = (props: any) => {
  return (
    <div className="container">
      <PageHeader title={props.label}>
        <Space direction="vertical" size={16}>
          <Title level={5}>
            طبق اطلاع رسانی قرار بر ثبت چک ها در سامانه صیاد است، این سامانه
            چیست و در کجا در دسترس است؟
          </Title>
          <Text>
            صیاد، سامانه یکپارچه‌ در بانک مرکزی است و براساس قانون جدید چک،
            چک‌ها در این سامانه ثبت، تایید و منتقل می شوند.
          </Text>
          <Text>
            در حال حاضر ابزارهای دسترسی به سامانه صیاد شامل برنامک های موبایلی
            حوزه پرداخت است که آماده ارائه خدمات ثبت، تایید و انتقال چک به صورت
            اختیاری هستند و فهرست آنها در سایت شاپرک منتشر می‌شود. اینترنت بانک
            و همراه بانک بانک ها و موسسات اعتباری نیز به زودی امکان دسترسی به
            سامانه صیاد را فراهم می‌کنند. شعب بانک ها هم این خدمت را برای کسایی
            که دسترسی به اینترنت ندارند، انجام می دهند. همچنین بانک مرکزی در حال
            بررسی روش های دیگر دسترسی به سامانه صیاد از جمله تلفن‌بانک، ابزار
            پیامکی، کدهای دستوری و سایر روش‌هایی است که توسط شبکه بانکی
            اطلاع‌رسانی خواهند شد.
          </Text>
          <Title level={5}>از چه زمانی ثبت چک ها در صیاد اجباری می شود؟</Title>
          <Text>
            از ابتدای سال 1400 ثبت چک های جدید در سامانه صیاد اجباری می شود. چک
            های موجود هم در حال حاضر می‌توانند به صورت اختیاری در سامانه صیاد
            ثبت شوند. البته بانک مرکزی در آینده، چک های موجود را جمع‌آوری و با
            چک‌های جدید جایگزین می‌کند و در این خصوص، فرجه زمانی مناسب را در
            اختیار مشتریان قرار می دهد تا مشکلی به وجود نیاید.
          </Text>
          <Title level={5}>چک‌های جدید چه ویژگی هایی دارند؟</Title>
          <Text>
            چک‌های جدید چند ویژگی دارند که از چک های موجود متفاوت است. مثلا رنگ
            چک‌های موجود صورتی و سبز است اما چک‌های جدید با تم رنگ بنفش چاپ و
            منتشر می‌شوند. همچنین بر روی برگه چک‌های جدید عبارت «کارسازی این چک
            منوط به ثبت صدور، دریافت و انتقال آن در سامانه صیاد است.» درج شده
            است.‬
          </Text>
          <Title level={5}>
            اگر بانک عامل اپلیکشین یا نرم‌افزار نداشته باشد، مشتریانی که دارای
            چک جدید صیاد هستند چگونه می‌توانند چک خود را در سامانه صیاد ثبت
            کنند؟
          </Title>
          <Text>
            می‌توانند به شعبه مراجعه کنند یا از طریق اپلیکیشن‌های پرداخت عمومی
            برای دسترسی به سامانه صیاد استفاده کنند.
          </Text>
          <Title level={5}>
            در استفاده از چک‌های جدید برای افرادی که به هر دلیل نمی‌توانند به
            اینترنت دسترسی داشته باشند، راهکاری در نظر گرفته شده است؟
          </Title>
          <Text>
            این دسته از افراد می‌توانند به شعبه بانک مراجعه کنند. البته سایر روش
            های دسترسی به صیاد نیز در بانک مرکزی در دست بررسی است که به محض
            اجرایی شدن، حتما اطلاع رسانی خواهد شد.
          </Text>
          <List
            header={
              <Space direction="vertical" size={16}>
                <Title level={5}>چگونه باید اطلاعات چک را ثبت کرد؟</Title>
                <Text>
                  پس از درج مندرجات چک در برگ آن، صادر کننده چک به یکی از
                  ابزارهای دسترسی به سامانه صیاد مراجعه کرده و ‌سپس اقدام به
                  ورود اطلاعات چک و اطلاعات هویتی ذینفع/ذینفعان می‌کند.‬ خلاصه
                  مراحل به شرح زیر است:‬
                </Text>
              </Space>
            }
            dataSource={[
              {
                text: 'ثبت مندرجات شامل تاریخ سررسید، مبلغ و اطلاعات هویتی ذینفع در برگ چک',
              },
              {
                text: 'مراجعه به یکی از ابزارهای دسترسی به سامانه صیاد',
              },
              {
                text: 'احراز هویت',
                children: [
                  'احراز هویت در اینترنت‌بانک و برنامک موبایلی بانک، صرفاً یک بار پس از دریافت نام کاربری و رمز عبور این برنامه‌ها انجام می‌شود.',
                  ' احراز هویت در برنامک‌های موبایلی حوزه پرداخت از طریق ورود اطلاعات يکي از کارت‌هاي بانکي متعلق به صادرکننده چک نزد همان بانکی که دسته چک وي را صادر کرده است، انجام می‌شود.',
                  'احراز هویت در شعب بانک‌های عامل طبق روال‌های موجود انجام می‌شود.',
                ],
              },
              {
                text: 'ورود مندرجات چک در سامانه صیاد و تکمیل فیلد «بابت»',
              },
              {
                text: 'تایید و ثبت اولیه چک',
              },
            ]}
            renderItem={(item) =>
              item.children ? (
                <List
                  header={<Text>{item.text}</Text>}
                  dataSource={item.children}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              ) : (
                <List.Item>{item.text}</List.Item>
              )
            }
          />
          <List
            header={
              <Space direction="vertical" size={16}>
                <Title level={5}>چگونه باید اطلاعات چک را تایید کرد؟</Title>
                <Text>
                  با توجه به اینکه ثبت نهایی چک منوط به استعلام و تطبیق مندرجات
                  برگ چک با اطلاعات ثبت شده در سامانه صیاد می‌باشد، گیرنده چک با
                  در دست داشتن برگ چک اقدامات زیر را صورت خواهد داد:
                </Text>
              </Space>
            }
            dataSource={[
              {
                text: 'مراجعه به یکی از ابزارهای دسترسی به سامانه صیاد (لزومی به یکسان بودن ابزار مورد استفاده توسط صادرکننده و تایید‌کننده چک وجود ندارد)',
              },
              {
                text: 'احراز هویت',
                children: [
                  'احراز هویت در اینترنت‌بانک و برنامک موبایلی بانک، صرفاً یک بار پس از دریافت نام کاربری و رمز عبور این برنامه‌ها انجام می‌شود.',
                  'احراز هویت در برنامک‌های موبایلی حوزه پرداخت از طریق ورود اطلاعات يکي از کارت‌هاي بانکي متعلق به ذینفع چک انجام می‌شود.',
                  'احراز هویت در شعب بانک‌های عامل طبق روال‌های موجود انجام می‌شود.',
                ],
              },
              {
                text: 'استعلام و تطبیق مندرجات برگ چک شامل تاریخ سررسید، مبلغ و اطلاعات هویتی ذینفع',
              },
              {
                text: 'تایید یا رد چک براساس انطباق یا عدم انطباق مندرجات',
                children: [
                  'در صورت تایید چک: چک در وضعیت ثبت نهایی تلقی می‌شود و قابلیت نقد شدن در سررسید را خواهد داشت.',
                  'در صورت رد چک: ذینفع ضمن انتخاب حداقل یکی از دلایل مندرج در سامانه، می‌بایست فیزیک چک را به صادرکننده/انتقال‌دهنده عودت دهد.',
                ],
              },
            ]}
            renderItem={(item) =>
              item.children ? (
                <List
                  header={<Text>{item.text}</Text>}
                  dataSource={item.children}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              ) : (
                <List.Item>{item.text}</List.Item>
              )
            }
          />
          <Text>
            نکته: مراجعه به سامانه صیاد از طریق برنامک‌های موبایلی حوزه پرداخت
            برای ثبت، تایید یا انتقال چک صرفا باید از طریق تلفن‌همراهی که
            سیم‌کارت آن متعلق به خود شخص است، انجام شود.
          </Text>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              اگر بانک عامل اپلیکشین یا نرم‌افزار نداشته باشد، مشتریانی که دارای
              چک جدید صیاد هستند چگونه می‌توانند چک خود را در سامانه صیاد ثبت
              کنند؟
            </Title>
            <Text>
              می‌توانند به شعبه مراجعه کنند یا از طریق اپلیکیشن‌های پرداخت عمومی
              برای دسترسی به سامانه صیاد استفاده کنند.
            </Text>
          </Space>
          <List
            header={
              <Space direction="vertical" size={16}>
                <Title level={5}>
                  چگونه می‌توان چک را از طریق سامانه صیاد انتقال داد؟
                </Title>
                <Text>
                  در قانون جدید چک پشت‌نویسی با درج اطلاعات مربوطه در سامانه
                  صیاد جایگزین شده است. براین اساس، مراحل زیر توسط انتقال دهنده
                  چک می‌بایست انجام گیرد:
                </Text>
              </Space>
            }
            dataSource={[
              {
                text: 'مراجعه به یکی از ابزارهای دسترسی به سامانه صیاد',
              },
              {
                text: 'احراز هویت',
                children: [
                  'احراز هویت در اینترنت‌بانک و برنامک موبایلی بانک، صرفاً یک بار پس از دریافت نام کاربری و رمز عبور این برنامه‌ها انجام می‌شود.',
                  'احراز هویت در برنامک‌های موبایلی حوزه پرداخت از طریق ورود اطلاعات يکي از کارت‌هاي بانکي متعلق به ذینفع چک انجام می‌شود.',
                  'احراز هویت در شعب بانک‌های عامل طبق روال‌های موجود انجام می‌شود.',
                ],
              },
              {
                text: 'ورود شناسه صیادی برگ چک متعلق به انتقال دهنده در سامانه صیاد',
              },
              {
                text: 'ورود اطلاعات مربوط به قلم اطلاعاتی «بابت» و هویت ذینفع جدید چک(انتقال‌گیرنده)',
              },
              {
                text: 'تایید و ثبت اولیه انتقال چک',
              },
            ]}
            renderItem={(item) =>
              item.children ? (
                <List
                  header={<Text>{item.text}</Text>}
                  dataSource={item.children}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              ) : (
                <List.Item>{item.text}</List.Item>
              )
            }
          />
          <Text>
            در انتقال چک نیز ذینفع جدید چک(انتقال‌گیرنده) باید مرحله تایید را پس
            از دریافت برگه چک در سامانه صیاد انجام دهد.
          </Text>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              آیا چک‌های قدیمی می‌توانند در وجه حامل صادر شوند؟
            </Title>
            <Text>
              چک‌های قدیمی به شکل سابق می‌توانند کارسازی شوند و بنابراین در وجه
              حامل نیز می‌توانند صادر شوند.
            </Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              ممنوعیت صدور چک در وجه حامل شامل کدام چک‌هاست؟{' '}
            </Title>
            <Text>
              چک های جدید. در واقع چک های جدید باید در وجه ذینفع مشخص صادر، و در
              سامانه صیاد ثبت شوند.
            </Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              آیا با ابلاغ قانون جدید صدور چک هنوز هم صدور چک برای ضمانت
              امکان‌پذیر است؟{' '}
            </Title>
            <Text>
              بله. چک های موجود که طبق روال انجام می‌شود اما صدور چک ضمانت برای
              چک‌های جدید باید در سامانه صیاد ثبت شود.
            </Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>وظیفه ثبت چک در سامانه صیاد با چه شخصی است؟</Title>
            <Text>
              صادرکننده چک، چک را در سامانه صیاد ثبت می‌کند. ذینفع چک نیز آن را
              تایید می‌کند.
            </Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              اگر مندرجات برگه چک با اطلاعات سامانه صیاد مغایر باشد تکلیف چیست؟
            </Title>
            <Text>
              {' '}
              در حال حاضر که ثبت چک اختیاری است ملاک، برگه چک است اما با توزیع
              چک های جدید در صورت وجود مغایرت، بانک، وجه چک را پرداخت نمی کند و
              اگه دارنده چک بخواهد، می تواند چک را برگشت بزند.{' '}
            </Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              کسانی که دریافت کننده چک هستند از کجا بدانند صادرکننده در سامانه
              صیاد، صدور آن را ثبت کرده است؟
            </Title>
            <Text>
              نکته مهم این است که دریافت‌کننده اگر در صیاد وارد نشده و اطلاعات
              ثبتی صادرکننده را تایید نکرده باشد، چک او اعتبار ندارد بنابراین
              برای اطمینان از این موضوع دریافت کننده چک، در زمان دریافت برگه چک
              حتما باید به سامانه صیاد مراجعه کرده و اطلاعات ثبت شده توسط
              صادرکننده را بررسی و تایید کند.
            </Text>
          </Space>
          <List
            header={
              <Space direction="vertical" size={16}>
                <Title level={5}>
                  محرومیت‌های دارندگان چک برگشتی در قانون جدید شامل چه مواردی
                  می‌شود؟
                </Title>
                <Text>
                  در قانون جدید چک، بعد از ثبت غیرقابل پرداخت بودن یا کسری مبلغ
                  چک در سامانه یکپارچه بانک مرکزی، این سامانه مراتب را به صورت
                  برخط به تمام بانک‌ها و مؤسسات اعتباری اطلاع می‌دهد. پس از گذشت
                  بیست و چهار ساعت، تمام بانک‌ها و مؤسسات اعتباری حسب مورد
                  مکلفند تا زمانی که از چک برگشتی رفع سوء اثر نشده است،
                  محدودیت‌های زیر را نسبت به صاحب حساب و امضاکننده چک برگشتی
                  اعمال کنند:
                </Text>
              </Space>
            }
            dataSource={[
              'الف- عدم امکان افتتاح هرگونه حساب و صدور کارت بانکی جدید؛ حتی صدور المثنی/ تمدید تاریخ اعتبار کارت/ کارت اعتباری و تسهیلات خرد',
              ' ب- مسدود شدن وجوه تمام حساب‌ها و کارت‌های بانکی و هر مبلغ متعلق به صادرکننده که تحت هر عنوان نزد بانک‌ها یا مؤسسات اعتباری موجود است به میزان کسری مبلغ چک',
              'ج- عدم پرداخت هرگونه تسهیلات بانکی یا صدور ضمانت‌نامه‌های ارزی یا ریالی',
              'د- عدم گشایش اعتبار اسنادی ارزی یا ریالی.',
            ]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
          <Space direction="vertical" size={10}>
            <Title level={5}>
              افراد هیئت مدیره یک شرکت که دارای چک برگشتی مربوط به شرکت هستند
              آیا در چک شخصی خود نیز به مشکل بر می‌خورند؟
            </Title>
            <Text>خیر</Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              آیا کسانی که بدهی به بانک دارند طبق قانون جدید چک می توانند دسته
              چک بگیرند؟
            </Title>
            <Text>
              خیر. این اشخاص مطابق ضوابط ابلاغی بانک مرکزی اساساً امکان افتتاح
              حساب جاری را ندارند.
            </Text>
          </Space>
          <List
            header={<Title level={5}>ثبت اطلاعات چک چه مزایایی دارد؟</Title>}
            dataSource={[
              'صدور چک بلامحل به حداقل می‌رسد.',
              'اعتبار و اعتماد به چک بیشتر می‌شود و قطعا آمار چک‌های برگشتی و پرونده های مربوط به آن بسیار کاهش می‌یابد.',
              ' با اجرای قانون، اعتبار چک صرفاً متکی به لاشه کاغذی نیست و با پشتیبان گیری و ثبت اطلاعات مندرج در چک در سیستم متمرکز بانک مرکزی، از وقوع جرائمی مثل جعل چک جلوگیری می‌شود و نگرانی‌ها‌ در خصوص از بین رفتن لاشه چک در مواردی از قبیل سیل، زلزله، سرقت چک و ... کاهش پیدا می‌کند.',
              ' یکی دیگر از مزایا این است که اجازه ثبت چک جدید در سامانه صیاد برای دارندگان چک برگشتی وجود ندارد. قبلا اگر شخصی چک برگشتی داشت می توانست دسته چک خودش را تا برگ آخر استفاده کند اما با اجرای قانون جدید، صدور و ثبت چک جدید در سامانه صیاد برای کسانی که حتی یک فقره چک برگشتی داشته باشند، امکان‌پذیر نیست.',
              'زمان رسیدگی قضایی به چک برگشتی بسیار کوتاه‌تر می‌شود',
              'محدودیت های دارندگان چک برگشتی بیشتر می‌شود',
            ]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />

          <Space direction="vertical" size={10}>
            <Title level={5}>
              با ثبت اطلاعات، وجود چک فیزیکی ضروری هست یا خیر؟
            </Title>
            <Text>
              بله ضروری است و در زمان وصول چک، اطلاعات برگه چک با سامانه صیاد
              تطبیق داده می‌شود.
            </Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              سامانه صیاد غیر از ثبت، تایید و انتقال چک، چه خدماتی را در اختیار
              مشتریان بانکی می‌گذارد؟
            </Title>
            <Text>
              {' '}
              در این سامانه می توان وضعیت اعتباری صادرکننده چک را استعلام گرفت.
              به این صورت که با وارد کردن شناسه ۱۶ رقمی صیادی برگ چک می‌توانید
              وضعیت صادرکننده چک در سیستم بانکی را از بابت داشتن یا نداشتن چک
              برگشتی مشاهده کنید{' '}
            </Text>
            <Text>
              البته شما می‌توانید این سرویس را از سایت بانک مرکزی و سامانه
              پیامکی ۷۰۱۷۰۱ نیز دریافت کنید.
            </Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              در قانون جدید اگر حساب صادرکننده چک، کسری داشته باشد چه کار باید
              کرد؟
            </Title>
            <Text>
              {' '}
              در صورت کسری حساب صادرکننده (شخصی که چک در ابتدا متعلق به او بوده
              است) می توان مبلغ موجود در آن حساب را طلب کرده و هم‌چنین خواهان
              پرداخت مبلغ کسری چک از محل مبالغ موجود در ساير حساب‌هاي انفرادي
              ريالي صاحب حساب در همان بانک شد. این موضوع شامل تمامی چک‌هاست و در
              حال حاضر اجرا می‌شود.{' '}
            </Text>
            <Text>
              با توزیع چک‌های جدید و در صورت کسری مبلغ چک، علاوه بر امکان فوق،
              تمام حساب‌هاي صادرکننده چک در تمام بانک‌ها و موسسات اعتباری به
              میزان مبلغ کسری چک پس از گذشت 24 ساعت از ثبت غيرقابل پرداخت بودن
              (ثبت برگشت چک) مسدود خواهد شد.
            </Text>
          </Space>
          <Space direction="vertical" size={10}>
            <Title level={5}>
              اقدام قضایی برای چک برگشتی در قانون جدید چگونه انجام می‌شود؟
            </Title>
            <Text>
              در صورت برگشت چک به هر دلیلی، بانک مکلف است به درخواست دارنده چک،
              فوراً غیر قابل پرداخت بودن آن را در سامانه یکپارچه بانک مرکزی ثبت
              کند و با دریافت کد رهگیری و درج آن در گواهینامه عدم پرداخت، علت یا
              علل عدم پرداخت را صریحاً قید و آن را امضاء، مهر و به متقاضی
              (دارنده چک) تسلیم کند.
            </Text>
            <Text>
              در گواهینامه عدم پرداخت باید هویت و نشانی کامل صادرکننده و دارنده
              چک، کد رهگیری دریافت شده از سامانه یکپارچه بانک مرکزی، مهر بانک و
              شخص حقوقی و وضعیت مطابقت یا عدم مطابقت امضای چک و نمونه امضای
              موجود در بانک درج شده باشد، در غیر این صورت در مراجع قضائی و ثبتی
              به آن ترتیب اثر داده نمی‌شود.
            </Text>
            <Text>
              دارنده چک برگشتی با در دست داشتن گواهینامه عدم پرداخت، می تواند به
              دفاتر خدمات الکترونیک قضایی قوه قضائیه رفته و درخواست صدور اجراییه
              از دادگاه صالح را کند. دادگاه با بررسی متن چک و احراز سه شرط مذکور
              در ماده (23) قانون صدور چک (1- وصول وجه آن منوط به تحقق شرطي نشده
              باشد؛ 2- در متن چك قيد نشده باشد كه چك بابت تضمين انجام معامله يا
              تعهدي است؛ و 3-گواهي عدم پرداخت به دلیل موضوع ماده 14 صادر نشده
              باشد. به این معنا که صادرکننده یا ذینفع چک اعلام نکرده باشد که چک
              مفقود یا سرقت یا جعل شده است و یا اینکه از طریق کلاه‌برداری یا
              خیانت‌ در امانت یا جرائم دیگر به دست نیامده باشد) اجرائیه را صادر
              می‌کند.
            </Text>
            <Text>
              از تاریخ ابلاغ اجرائیه، ۱۰ روز به صادرکننده چک برگشتی مهلت داده
              می‌شود که مطالبات خود را پرداخت کند یا با موافقت دارنده ترتیبی
              برای پرداخت آن بدهد یا مالی را معرفی کند، در غیر این‌صورت، مید بر
              حسب درخواست دارنده چک، مطابق قانون «نحوه اجرای محکومیت‌های مالی»
              اقدام خواهد شد.
            </Text>
          </Space>
        </Space>
      </PageHeader>
    </div>
  );
};
export default CheckTransfer;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: items[1].children[1].label,
      // name: menuData[1].subMenu[1].title,
    },
  };
};
